@echo off
chcp 65001 >nul
set "PATH=%PATH%;C:\Users\rrsim\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd;C:\Users\rrsim\AppData\Local\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\bin"

echo ========================================================
echo   FEELY DESIGN // GITHUB PAGES DEPLOYER (feelydesign.com)
echo ========================================================
echo.

gh auth status >nul 2>nul
if %errorlevel% neq 0 (
    echo [*] Выполняется вход в GitHub через браузер...
    gh auth login --web -p https
    gh auth setup-git
)

git add .
git commit -m "Update Feely Design portfolio & lead system" 2>nul
git branch -M main
git remote set-url origin https://github.com/simonyanroman/feely_design_landing.git 2>nul || git remote add origin https://github.com/simonyanroman/feely_design_landing.git

echo [*] Отправка файлов на GitHub (https://github.com/simonyanroman/feely_design_landing)...
git push -u origin main --force

echo [*] Настройка GitHub Pages и домена feelydesign.com...
gh api -X POST repos/simonyanroman/feely_design_landing/pages -f "source[branch]=main" -f "source[path]=/" 2>nul
gh api -X PUT repos/simonyanroman/feely_design_landing/pages -f "cname=feelydesign.com" -F "https_enforced=true" 2>nul

echo.
echo [✓] Деплой успешно завершен! Сайт опубликован на https://feelydesign.com
pause
