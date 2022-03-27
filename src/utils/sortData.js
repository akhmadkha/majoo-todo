export function sortAsc(data){
  return [...data].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
}

export function sortDesc(data){
 return [...data].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}