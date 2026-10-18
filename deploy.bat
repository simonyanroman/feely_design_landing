@echo off
chcp 65001 >nul
echo ========================================================
echo   FEELY DESIGN // GITHUB PAGES DEPLOYER (feelydesign.com)
echo ========================================================
echo.

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Git не найден в PATH. Устанавливаю Git через winget...
    winget install --id Git.Git -e --source winget
    echo [!] Перезапустите этот файл после установки Git.
    pause
    exit /b
)

if not exist ".git" (
    echo [*] Инициализация Git-репозитория...
    git init
    git branch -M main
)

git add .
git commit -m "Deploy Feely Design multi-page portfolio & messenger dispatch"

git remote get-url origin >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    set /p REPO_URL="Вставьте ссылку на ваш GitHub репозиторий (например https://github.com/username/feelydesign.git): "
    git remote add origin %REPO_URL%
)

echo [*] Отправка файлов на GitHub (ветка main)...
git push -u origin main

echo.
echo [✓] Готово! В настройках репозитория на GitHub:
echo     Settings -> Pages -> Branch: main -> Save.
echo     Custom domain: feelydesign.com (файл CNAME уже добавлен!).
pause
