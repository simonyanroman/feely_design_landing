$ErrorActionPreference = "Stop"
$env:PATH += ";C:\Users\rrsim\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd;C:\Users\rrsim\AppData\Local\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\bin"

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  FEELY DESIGN // GITHUB DEPLOYER (feelydesign.com)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

# Check GitHub authentication
& gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "[*] Authorizing with GitHub via browser..." -ForegroundColor Yellow
    & gh auth login --web -p https
    & gh auth setup-git
}

Write-Host "[*] Adding and committing files..." -ForegroundColor Green
& git add -A
& git commit -m "Deploy Feely Design portfolio and lead system" 2>$null

Write-Host "[*] Setting remote origin..." -ForegroundColor Green
& git branch -M main
& git remote set-url origin https://github.com/simonyanroman/feely_design_landing.git 2>$null
if ($LASTEXITCODE -ne 0) {
    & git remote add origin https://github.com/simonyanroman/feely_design_landing.git 2>$null
}

Write-Host "[*] Pushing files to GitHub main branch..." -ForegroundColor Yellow
& git push -u origin main --force

Write-Host "[*] Enabling GitHub Pages for feelydesign.com..." -ForegroundColor Green
& gh api -X POST repos/simonyanroman/feely_design_landing/pages -f "source[branch]=main" -f "source[path]=/" 2>$null
& gh api -X PUT repos/simonyanroman/feely_design_landing/pages -f "cname=feelydesign.com" -F "https_enforced=true" 2>$null

Write-Host ""
Write-Host "[âœ“] Deployment completed! Live at: https://feelydesign.com" -ForegroundColor Cyan
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
