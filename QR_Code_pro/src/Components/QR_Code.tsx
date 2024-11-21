
const QR_Code = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen p-1 items-center   " >
      <div className="max-w-lg w-full p-6 bg-cyan-500 rounded-lg shadow-lg space-y-6 ">
        <h1 className="font-bold text-2xl text-center">QR Code Generator</h1>
        <div className="flex justify-center">
          <img src="/vite.svg" alt="" className="h-auto " />
        </div>

        <div className="space-y-4">
          <label htmlFor="data_input" className="text-lg font-medium">Data for QR Code  </label>
          <input
            type="text"
            name="data_input"
            id="data_input"
            className=" w-full px-4 py-2 border-2 border-stone-600 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 " />

          <label htmlFor="image_size" className="text-lg font-medium">Image Size  </label>
          <input
            type="text"
            name="image_size"
            id="image_size"
            className="w-full px-4 py-2 border-2 border-stone-600 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500" />
        </div>



        <div className="space-x-5 flex" >
          <button className="w-1/2 py-2 text-white bg-slate-500 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-600 " >Generate QR code</button>
          <button 
          className="w-1/2 py-2 bg-slate-500 text-white rounded-md
           hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400" onClick={()=> alert ("hi")}>
            Download QR Code
            </button>
        </div>
      </div>

    </div>

  )
}

export default QR_Code