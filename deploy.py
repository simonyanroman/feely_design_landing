import os
import subprocess
import sys

# Ensure portable Git and GitHub CLI are in PATH
winget_base = r"C:\Users\rrsim\AppData\Local\Microsoft\WinGet\Packages"
os.environ["PATH"] += (
    f";{winget_base}\\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\\cmd"
    f";{winget_base}\\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\\bin"
)

print("=" * 60)
print("  FEELY DESIGN // GITHUB DEPLOYER (feelydesign.com)")
print("=" * 60)
print()

# 1. Check gh auth
auth_check = subprocess.run(["gh", "auth", "status"], capture_output=True, text=True)
if auth_check.returncode != 0:
    print("[*] Opening browser for one-time GitHub authorization...")
    print("    A one-time code will appear in this window. Press Enter to proceed in browser.")
    subprocess.run(["gh", "auth", "login", "--web", "-p", "https"])
    subprocess.run(["gh", "auth", "setup-git"])

# 2. Add and commit all website files
print("[*] Staging website files and assets...")
subprocess.run(["git", "add", "-A"])
subprocess.run(["git", "commit", "-m", "Deploy Feely Design portfolio and lead system"], capture_output=True)

# 3. Ensure remote origin is set
subprocess.run(["git", "branch", "-M", "main"])
subprocess.run(["git", "remote", "set-url", "origin", "https://github.com/simonyanroman/feely_design_landing.git"], capture_output=True)

# 4. Push to GitHub
print("[*] Pushing files to https://github.com/simonyanroman/feely_design_landing...")
push_res = subprocess.run(["git", "push", "-u", "origin", "main", "--force"])

if push_res.returncode == 0:
    print("[*] Activating GitHub Pages for custom domain feelydesign.com...")
    subprocess.run(["gh", "api", "-X", "POST", "repos/simonyanroman/feely_design_landing/pages", "-f", "source[branch]=main", "-f", "source[path]=/"], capture_output=True)
    subprocess.run(["gh", "api", "-X", "PUT", "repos/simonyanroman/feely_design_landing/pages", "-f", "cname=feelydesign.com", "-F", "https_enforced=true"], capture_output=True)
    print()
    print("============================================================")
    print("  [+] SUCCESS! Website is deployed!")
    print("  Live URL: https://feelydesign.com")
    print("  Repository: https://github.com/simonyanroman/feely_design_landing")
    print("============================================================")
else:
    print()
    print("[!] Push encountered an issue. See details above.")

print()
input("Press Enter to exit...")
