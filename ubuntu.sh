#!/usr/bin/env bash

set -euo pipefail

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  echo "Usage: ./ubuntu.sh [port]"
  exit 0
fi

port="${1:-4001}"
if [[ ! "$port" =~ ^[0-9]+$ ]] || ((port < 1 || port > 65535)); then
  echo "Error: port must be a number between 1 and 65535." >&2
  exit 2
fi

export JEKYLL_PORT="$port"
export LIVERELOAD_PORT="${LIVERELOAD_PORT:-35730}"

echo "Starting preview at http://127.0.0.1:${JEKYLL_PORT}"
exec docker compose up --build
