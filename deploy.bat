@echo off
python "%~dp0deploy.py"
if %errorlevel% neq 0 pause
