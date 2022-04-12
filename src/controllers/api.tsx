const inicialLeads = [
    {
      id: '1',
      name: 'Org. Internacionais',
      telNumber: '+55 (21) 9 9999-9999',
      email: 'email@exemplo.com', 
      status: 'Cliente em Potencial',
      opportunities: ["RPA", "Analytics"],
    },
    {
      id: '2',
      name: 'Ind. Farm. LTDA',
      telNumber: '+55 (21) 9 9999-9999',
      email: 'email@exemplo.com', 
      status: 'Cliente em Potencial',
      opportunities: ["Produto Digital", "Analytics"],
    },
    {
      id: '3',
      name: 'Musc. Sound Live Cmp',
      telNumber: '+55 (21) 9 9999-9999',
      email: 'email@exemplo.com', 
      status: 'Cliente em Potencial',
      opportunities: ["RPA", "Produto Digital", "BPM"],
    }
  ]
  
  const inicialData = [
      {
        id: '1',
        name: 'Cliente em Potencial',
        leads: [...inicialLeads]
      },
      {
        id: '2',
        name: 'Dados Confirmados',
        leads: []
      },
      {
        id: '3',
        name: 'Reunião Agendada',
        leads: []
      }    
    ]
  
  export function downloadLeadsFromLocalStorage(){
    const localStorageLeads = localStorage.getItem('leads')
    const leads = localStorageLeads == null
    ? []
    : [...JSON.parse(localStorageLeads)]
  
    return leads;
  }
  
  
  export function loadInicialData(){
    const localStorageleads = downloadLeadsFromLocalStorage()
    return {
      columns: [...inicialData],
      leads: [...localStorageleads]
    }
  }