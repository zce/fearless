interface MenuItem {
  id: string
  label: string
  icon?: string
  name?: string
  params?: { [key: string]: string }
  children?: MenuItem[]
}

interface APIs {
  '/menus': MenuItem[]
}
