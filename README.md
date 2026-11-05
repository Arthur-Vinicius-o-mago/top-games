# TOP GAMES — React starter

Aplicação inicial em React com Vite, interface responsiva, top header, sidebar e navegação.

## Stack
- React 19.3.1 / React DOM 19.3.1
- Vite 8.3.5 + @vitejs/plugin-react 6.2.1
- @supabase/supabase-js 2.119.0

## Executar localmente
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Supabase
1. Copie `.env.example` para `.env.local`.
2. Preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` com os dados do projeto Supabase.
3. Execute o SQL de `supabase/migrations/20261104000000_create_names.sql` no SQL Editor do projeto.
4. Em Supabase → Integrations → Data API, confirme que a tabela `public.names` está habilitada/exposta.
5. Reinicie o servidor Vite.

O formulário grava e carrega registros da tabela `public.names` quando as variáveis estão configuradas. Sem elas, usa uma lista temporária em memória.

**Atenção:** a migration cria uma política pública de demonstração para leitura e inserção anônima. Use apenas para protótipo; antes de produção, adicione autenticação e políticas de acesso adequadas. O frontend usa somente a publishable key. Nunca exponha a service_role ou uma secret key em variáveis `VITE_*`.

## Vercel
Importe este repositório na Vercel e configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` em Project Settings → Environment Variables. O build usa `npm run build` e o diretório de saída é `dist`.
