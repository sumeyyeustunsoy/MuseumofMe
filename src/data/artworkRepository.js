const KEY='museum-of-me:artworks:v1'
export const artworkRepository={all(){try{const value=localStorage.getItem(KEY);return value?JSON.parse(value):null}catch{return null}},save(items){localStorage.setItem(KEY,JSON.stringify(items));return items}}
