import { useState } from 'react'

const navigation = [
  { section: 'WORKSPACE', items: [{ id: 'overview', label: 'Visão geral', icon: '◫' }, { id: 'projects', label: 'Projetos', icon: '▤' }, { id: 'activity', label: 'Atividade', icon: '◷' }] },
  { section: 'PREFERÊNCIAS', items: [{ id: 'settings', label: 'Configurações', icon: '⚙' }, { id: 'help', label: 'Ajuda e suporte', icon: '?' }] },
]

function App() {
  const [page, setPage] = useState('overview')
  const [name, setName] = useState('')
  const [savedNames, setSavedNames] = useState([])
  const [notice, setNotice] = useState('')

  const titles = { overview: ['Visão geral', 'Acompanhe seu espaço de trabalho em um só lugar.'], projects: ['Projetos', 'Organize e acompanhe seus projetos.'], activity: ['Atividade', 'Veja as últimas ações realizadas.'], settings: ['Configurações', 'Gerencie as preferências do aplicativo.'], help: ['Ajuda e suporte', 'Encontre orientações para começar.'] }
  const saveName = (event) => {
    event.preventDefault()
    if (!name.trim()) return
    setSavedNames((items) => [name.trim(), ...items])
    setNotice('Nome adicionado com sucesso.')
    setName('')
  }

  return <div className="app-shell">
    <aside className="sidebar">
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); setPage('overview') }}>
        <span className="brand-mark">T</span><span>TOP <b>GAMES</b><small>WORKSPACE</small></span>
      </a>
      <div className="workspace-switch"><span className="workspace-avatar">TG</span><span><b>Meu workspace</b><small>Plano gratuito</small></span><span className="chevron">⌄</span></div>
      <nav>{navigation.map(group => <div className="nav-group" key={group.section}><p className="nav-heading">{group.section}</p>{group.items.map(item => <button key={item.id} className={page === item.id ? 'nav-item active' : 'nav-item'} onClick={() => { setPage(item.id); setNotice('') }}><span className="nav-icon">{item.icon}</span>{item.label}{item.id === 'activity' && <span className="nav-count">3</span>}</button>)}</div>)}</nav>
      <div className="sidebar-bottom"><div className="plan-card"><span className="plan-spark">✳</span><b>Seu espaço, suas ideias.</b><p>Este é o ponto de partida do seu próximo projeto.</p><button onClick={() => setPage('help')}>Saiba mais <span>↗</span></button></div><div className="profile"><div className="profile-avatar">A</div><span><b>Administrador</b><small>admin@topgames.app</small></span><span className="dots">···</span></div></div>
    </aside>

    <main className="main-area">
      <header className="topbar"><div className="breadcrumbs"><span>Workspace</span><span className="slash">/</span><b>{titles[page][0]}</b></div><div className="top-actions"><span className="status"><i/> Todos os sistemas operacionais</span><button className="icon-button" aria-label="Notificações" onClick={() => setPage('activity')}>♧<i/></button><div className="top-avatar">A</div></div></header>
      <section className="content">
        <div className="page-heading"><div><div className="eyebrow">SEU ESPAÇO DE TRABALHO <span>✳</span></div><h1>{titles[page][0]}</h1><p>{titles[page][1]}</p></div><div className="date-chip">◷ &nbsp; Ambiente de teste</div></div>
        {page === 'overview' && <>
          <div className="welcome-card"><div className="welcome-copy"><span className="welcome-tag">✦ &nbsp; SEJA BEM-VINDO</span><h2>Ideias grandes começam<br/>com um primeiro passo.</h2><p>Seu ambiente está pronto. Vamos começar adicionando um nome?</p><a href="#add-name" onClick={() => document.getElementById('name-input')?.focus()}>Começar agora <span>→</span></a></div><div className="orb orb-one"/><div className="orb orb-two"/><div className="welcome-art"><div className="art-window"><div className="art-dots">•••</div><div className="art-line long"/><div className="art-line"/><div className="art-blocks"><i/><i/><i/></div><div className="art-line short"/></div><div className="art-badge">✳</div></div></div>
          <div className="section-title"><div><h3>Seu painel</h3><p>Um resumo do seu ambiente de teste.</p></div><span className="muted-label">ATUALIZADO AGORA</span></div>
          <div className="stats-grid"><div className="stat-card"><div className="stat-top"><span>Nomes cadastrados</span><span className="stat-icon purple">Aa</span></div><strong>{savedNames.length.toString().padStart(2,'0')}</strong><small>Registros nesta sessão</small></div><div className="stat-card"><div className="stat-top"><span>Status do app</span><span className="stat-icon green">✓</span></div><strong className="stat-word">Operacional</strong><small>Interface pronta para uso</small></div><div className="stat-card"><div className="stat-top"><span>Banco de dados</span><span className="stat-icon orange">⌁</span></div><strong className="stat-word">Pendente</strong><small>Conexão Supabase a configurar</small></div></div>
          <div className="section-title form-title" id="add-name"><div><h3>Adicionar nome</h3><p>Campo de teste para a futura gravação no Supabase.</p></div><span className="required-label">CAMPO ÚNICO</span></div>
          <form className="input-card" onSubmit={saveName}><label htmlFor="name-input">Nome</label><div className="input-row"><div className="input-wrap"><span>✎</span><input id="name-input" value={name} onChange={e => setName(e.target.value)} placeholder="Digite um nome..." maxLength={100}/></div><button type="submit" disabled={!name.trim()}>Adicionar nome <span>→</span></button></div><div className="form-foot"><span>⌁ &nbsp; Os dados serão armazenados localmente nesta demonstração.</span><span>{name.length}/100</span></div>{notice && <p className="success-message">✓ {notice}</p>}</form>
          <div className="section-title list-title"><div><h3>Últimos registros</h3><p>Nomes adicionados durante esta sessão.</p></div><span className="record-count">{savedNames.length} REGISTROS</span></div>
          <div className="records-card">{savedNames.length ? savedNames.slice(0,5).map((item,index)=><div className="record-row" key={index}><div className="record-avatar">{item.charAt(0).toUpperCase()}</div><b>{item}</b><span>Adicionado agora</span><i>✓</i></div>) : <div className="empty-state"><span>▤</span><b>Nenhum registro por enquanto</b><p>Os nomes adicionados aparecerão aqui.</p></div>}</div>
        </>}
        {page !== 'overview' && <div className="placeholder-card"><div className="placeholder-icon">{navigation.flatMap(g=>g.items).find(i=>i.id===page)?.icon || '✳'}</div><h2>{titles[page][0]}</h2><p>Esta área está preparada para evoluir nas próximas etapas do projeto.</p><button onClick={() => setPage('overview')}>Voltar ao painel <span>→</span></button></div>}
        <footer><span>© 2026 TOP GAMES</span><span>FEITO PARA CONSTRUIR O PRÓXIMO PASSO <b>✳</b></span></footer>
      </section>
    </main>
  </div>
}

export default App
