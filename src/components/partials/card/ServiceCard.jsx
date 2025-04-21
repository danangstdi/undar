export default function ServiceCard( {main, label, icon, text} ) {
  return (
    <div className="card h-60 md:h-80 overflow-hidden rounded-3xl cursor-default">
       <div className={`card2 bg-gradient-to-br ${main ? 'from-cyan-400 to-cyan-600' : 'from-zinc-700 to-zinc-900'} h-full p-3 flex flex-col justify-center items-center gap-3 hover:rounded-3xl`}>
         <div className="bg-white rounded-full p-3 w-fit text-zinc-900 service-icon-anim">
           {icon}
         </div>
         <h3 className="text-lg text-white mt-1 md:text-xl">{label}</h3>
        <p className="text-xs text-gray-200 md:text-sm">{text}</p>
       </div>
     </div>
  )
}
