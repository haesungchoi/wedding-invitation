# ─────────────────────────────────────────────────────────────
# live-sync.ps1 — GitHub 푸시를 로컬에 자동 반영 (Windows PowerShell)
#
# 사용법:
#   1) VSCode에서 이 저장소를 열고, index.html을 Live Server로 실행
#   2) PowerShell 터미널에서:  ./live-sync.ps1
#      (실행 차단 시 한 번:  Set-ExecutionPolicy -Scope Process Bypass)
#   3) 원격(GitHub)이 갱신되면 자동 git pull → Live Server가 자동 새로고침
#
#   중단: Ctrl+C
#
# 주의: 로컬에서 직접 파일을 수정하면 pull 충돌이 날 수 있습니다.
#       동기화 중에는 로컬 편집을 피하거나, 충돌 시 `git stash` 후 다시 실행하세요.
# ─────────────────────────────────────────────────────────────
Set-Location $PSScriptRoot
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
$interval = if ($args.Count -ge 1) { [int]$args[0] } else { 3 }

Write-Host "▶ 자동 동기화: origin/$branch  ($interval초마다 확인)  — 중단: Ctrl+C"
while ($true) {
  git fetch origin $branch -q 2>$null
  $local  = (git rev-parse '@').Trim()
  $remote = (git rev-parse "origin/$branch").Trim()
  if ($local -ne $remote) {
    git pull --ff-only origin $branch -q 2>$null
    if ($LASTEXITCODE -eq 0) {
      Write-Host ("[{0}] ✓ 업데이트됨 -> {1}  {2}" -f (Get-Date -Format HH:mm:ss), (git rev-parse --short HEAD), (git log -1 --pretty=%s))
    } else {
      Write-Host ("[{0}] ✗ pull 실패 - 로컬 수정사항 충돌일 수 있어요. 'git stash' 후 다시 시도하세요." -f (Get-Date -Format HH:mm:ss))
    }
  }
  Start-Sleep -Seconds $interval
}
