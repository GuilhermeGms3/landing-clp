# CI/CD Reutilizavel (GitHub Actions)

Este repo agora tem dois workflows:

- `.github/workflows/reusable-ci-cd.yml` (modelo reutilizavel)
- `.github/workflows/ci-cd.yml` (workflow chamador deste projeto)

## Como pensar (simples)

- `CI`: valida codigo (install + check + build).
- `CD`: faz deploy automatico na VM apos push em `main`.
- Reutilizavel: voce cria 1 modelo e so muda parametros por projeto.

## Secrets necessarios

No repositorio: `Settings > Secrets and variables > Actions`

- `SSH_HOST` (ex: `100.102.45.127`)
- `SSH_USER` (ex: `guilherme`)
- `SSH_PRIVATE_KEY` (chave privada completa)

## Parametros que mudam por projeto

No arquivo `.github/workflows/ci-cd.yml`:

- `deploy_path`
- `deploy_branch`
- `compose_command` (`docker-compose` ou `docker compose`)
- `run_deploy` (`true` ou `false`)

## Como usar em TODO projeto novo

Opcao A (rapida):
- Copie os 2 workflows para o novo repo.
- Ajuste `deploy_path`.
- Crie os 3 secrets.

Opcao B (mais profissional - repo central):
- Crie um repo tipo `infra-github-actions`.
- Coloque la o `reusable-ci-cd.yml`.
- Nos projetos, use:

```yaml
jobs:
  pipeline:
    uses: SEU_USUARIO/infra-github-actions/.github/workflows/reusable-ci-cd.yml@main
    with:
      deploy_path: "/home/guilherme/apps/meu-projeto"
      deploy_branch: "main"
      compose_command: "docker-compose"
      run_deploy: true
    secrets:
      SSH_HOST: ${{ secrets.SSH_HOST }}
      SSH_USER: ${{ secrets.SSH_USER }}
      SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
```

## Fluxo ideal para aprender

1. Faz commit numa branch.
2. Abre PR para `main` e observa o job `CI`.
3. Faz merge na `main`.
4. Observa o job `Deploy to VM`.
5. Valida no servidor com `docker ps` e no dominio.

## Dica de seguranca

- Nao use senha em workflow.
- Use usuario de deploy com chave SSH.
- Restrinja permissoes desse usuario ao necessario.
