import {useCallback,useEffect,useState} from 'react'
import {seed} from '../domain/artworks.js'
import {artworkRepository as repo} from '../data/artworkRepository.js'
export function useMuseumViewModel(){const[artworks,setArtworks]=useState([]);useEffect(()=>{let data=repo.all();if(data===null){repo.save(seed);data=seed}setArtworks(data)},[]);const refresh=()=>setArtworks(repo.all()||[]);const add=useCallback(item=>{repo.save([item,...(repo.all()||[])]);refresh()},[]);const update=useCallback(item=>{repo.save((repo.all()||[]).map(a=>a.id===item.id?item:a));refresh()},[]);const remove=useCallback(id=>{repo.save((repo.all()||[]).filter(a=>a.id!==id));refresh()},[]);return{artworks,add,update,remove}}
