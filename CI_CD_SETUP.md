# GitHub Actions CI/CD Setup

Este projeto ja esta com workflow em:

- `.github/workflows/ci-cd.yml`

## O que ele faz

- Em `pull_request` para `main`: roda CI (`npm ci`, `npm run check`, `npm run build`).
- Em `push` na `main`: roda CI e depois deploy automatico na VM por SSH.

## Secrets necessarios no GitHub

No repositorio, va em `Settings > Secrets and variables > Actions > New repository secret` e crie:

- `SSH_HOST`: IP da VM de deploy (ex.: `100.102.45.127`)
- `SSH_USER`: usuario SSH (ex.: `guilherme`)
- `SSH_PRIVATE_KEY`: chave privada (conteudo completo, incluindo `-----BEGIN ...-----`)
- `DEPLOY_PATH`: pasta do projeto na VM (ex.: `/home/guilherme/apps/clpengenharia`)

## Pre-requisitos na VM de deploy

- O repositorio precisa existir em `DEPLOY_PATH`.
- A branch `main` precisa estar configurada como upstream.
- Docker e `docker-compose` precisam estar instalados.
- A VM precisa conseguir fazer `git pull origin main`.

## Fluxo de uso

- Voce abre PR para `main` -> CI valida.
- Merge na `main` -> deploy automatico executa.
- Se quiser rodar manualmente: aba `Actions` -> workflow `CI/CD` -> `Run workflow`.
