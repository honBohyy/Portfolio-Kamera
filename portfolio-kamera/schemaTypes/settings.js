export default {
  name: 'settings',
  title: 'Nastavení textů webu',
  type: 'document',
  fields: [
    { name: 'name', title: 'Jméno', type: 'string' },
    { name: 'job', title: 'Profese', type: 'string' },
    { name: 'heroTitle', title: 'Hlavní nadpis', type: 'text' },
    { name: 'email', title: 'E-mail', type: 'string' },
    { name: 'contactHeading', title: 'Nadpis v patičce', type: 'string' }
  ]
}