import Billboard from "@/components/Billboard"
import MovieList from "@/components/MovieList"
import Navbar from "@/components/Navbar"
import UseInfoModel from "@/components/UseInfoModel"
import useFavorites from "@/hooks/useFavorites"
import useInfoModal from "@/hooks/useInfoModal"
import useMovieList from "@/hooks/useMovieList"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"


export  async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context)
  
  if(!session){
   return{
    redirect:{
      destination:'/auth',
      permanent: false
    }
   }
  }
  return{
    props:{}
  }
}

export default function Home() {
  const {data: movies=[]} = useMovieList();
  const {data: favorites=[]} = useFavorites()
  const {isOpen, closeModel} =useInfoModal()
  console.log(`THIS IS MAIN FAVAORITES: ${favorites}`)
  return (
    <>
    <UseInfoModel visible={isOpen} onClose={closeModel}/> 
    <Navbar/>
    <Billboard/>
    <div className="pb-48">
      <MovieList title="Trending Now" data={movies}/>
      <MovieList title="My List" data={favorites}/>
      </div>
      </>
  )
}
