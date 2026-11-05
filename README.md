# TOP GAMES — React starter

Aplicação inicial em React com Vite, interface responsiva, top header, sidebar e navegação.

## Stack
- React 19.3.1
- React DOM 19.3.1
- Vite 8.3.5

## Executar localmente
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Supabase (próxima etapa)
1. Copie `.env.example` para `.env.local`.
2. Preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com os dados do projeto.
3. Instale `@supabase/supabase-js` quando formos ligar o formulário ao banco.

Use apenas a chave publishable/anon no frontend. Nunca coloque a service_role ou secret key em variáveis `VITE_*`.

O formulário atual é demonstrativo: os nomes ficam apenas no estado da página e não são persistidos no banco.
