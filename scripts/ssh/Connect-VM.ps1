param(
  [Parameter(Mandatory=$false)]
  [ValidateSet('pipeline','proxy','monitoramento','tank-domain')]
  [string]$Target,

  [string]$User = 'guilherme'
)

$hosts = @{
  'pipeline'      = '100.102.45.127'
  'proxy'         = '100.72.95.93'
  'monitoramento' = '100.102.126.60'
  'tank-domain'   = '100.66.214.45'
}

function Connect-Target([string]$name) {
  if (-not $hosts.ContainsKey($name)) {
    Write-Host "Alvo inválido: $name" -ForegroundColor Red
    return
  }

  $ip = $hosts[$name]
  Write-Host "Conectando em $name ($User@$ip)..." -ForegroundColor Cyan
  ssh "$User@$ip"
}

if ($Target) {
  Connect-Target $Target
  exit
}

Write-Host "" 
Write-Host "=== SSH HUB ===" -ForegroundColor Yellow
Write-Host "1) pipeline      ($($hosts['pipeline']))"
Write-Host "2) proxy         ($($hosts['proxy']))"
Write-Host "3) monitoramento ($($hosts['monitoramento']))"
Write-Host "4) tank-domain   ($($hosts['tank-domain']))"
Write-Host "Q) sair"
Write-Host ""

$choice = Read-Host "Escolha"
switch ($choice.ToLower()) {
  '1' { Connect-Target 'pipeline' }
  '2' { Connect-Target 'proxy' }
  '3' { Connect-Target 'monitoramento' }
  '4' { Connect-Target 'tank-domain' }
  'q' { Write-Host 'Saindo...' }
  default { Write-Host 'Opção inválida.' -ForegroundColor Red }
}
