import React from 'react'

function Skills() {
  
    const aboutSkills = [
        {icon : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16">
                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"/>
                </svg>,
        aboutSkill : 'Design + Development',
         description : 'Clean modern design, optimized for performance.',},

        {icon : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-filetype-jsx" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.075 14.841a1.13 1.13 0 0 0 .401.823c.13.108.288.192.478.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.776.15-.225.099-.4.24-.528.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM0 14.791c0 .165.027.32.082.466.055.147.136.277.243.39.11.113.245.202.407.267.164.062.354.093.569.093.42 0 .748-.115.984-.346.238-.23.358-.565.358-1.004v-2.725h-.791v2.745c0 .201-.046.357-.138.466-.092.11-.233.164-.422.164a.499.499 0 0 1-.454-.246.576.576 0 0 1-.073-.27H0Zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z"/>
                </svg>,
         aboutSkill : 'Technology',
         description : 'Used latest technologies to a progressive website.',},

        {icon : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-aspect-ratio" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
                <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z"/>
                </svg>,
         aboutSkill : 'Always Responsive',
         description : 'A responsive design makes your website accessible for all users, regardless of their device.',},
      ]
return (<>

<div className='container text-light'>
<div className='row mt-5' >
    <div className=' row'>
        <h5 className='text-start col-md-4 col-lg-3 col-6 py-2 border-light border-2 border-bottom'> <b>SKILLS</b></h5>
    </div>

<div className=' col-md-6 align-self-center '  >
{aboutSkills.map((data, index) => {
    return (
      <div className='row mt-4 mb-3'  key={index}>
        <div className='col-2 d-inline text-end '>
            {data.icon}
        </div>
        <div className='col-10 d-inline'>
            <h5>{data.aboutSkill}</h5>
        </div>

        <div className='col-9 offset-2 '>
          <p>{data.description}</p>
        </div>
      </div>
  )}
  )}
  </div> 



<div className='col-md-6 align-self-center mb-5 '>
<div className='row mt-sm-4 mt-sm-0 justify-content-center'>
<div className="progress mt-2 mt-3 mb-3 w-75 h-25 px-0 bg-secondary justify-content-start">
<div className="progress-bar bg-light text-dark text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>HTML - 90% </b></div>
</div>
</div>
<div className='row justify-content-center'>
<div className="progress w-75 mt-3 mb-3 px-0 h-25 bg-secondary">
<div className="progress-bar bg-light text-dark  text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>CSS - 80%</b></div>
</div>
</div>
<div className='row justify-content-center'>
<div className="progress w-75  h-25   px-0   mb-3 mt-3 bg-secondary">
<div className="progress-bar bg-light text-dark  text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>Bootstrap - 70%</b></div>
</div>
</div>
<div className='row justify-content-center'>
<div className="progress w-75 h-25  px-0  mb-3 mt-3 bg-secondary">
<div className="progress-bar bg-light text-dark text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>JavaScript - 75%</b></div>
</div>
</div>
<div className='row justify-content-center'>
<div className="progress w-75 h-25  px-0  mb-3 mt-3  bg-secondary">
<div className="progress-bar bg-light text-dark text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>React JS - 85% </b></div>
</div>
</div>
<div className='row justify-content-center'>
<div className="progress w-75 h-25  px-0  mb-3 mt-3  bg-secondary">
<div className="progress-bar  bg-light text-dark  text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> <b>C/C++ - 40% </b></div>
</div>
</div>
<div className='row justify-content-center'>
<div className="progress w-75  h-25  px-0  mb-3 mt-3  bg-secondary">
<div className="progress-bar  bg-light text-dark  text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>MS word - 80% </b></div>
</div>
</div>
<div className='row justify-content-center'>
<div className="progress w-75 h-25  px-0  mb-3 mt-3  bg-secondary">
<div className="progress-bar bg-light text-dark text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>MS Powerpoint - 80% </b></div>
</div>
</div>
<div className='row justify-content-center'>
<div className="progress w-75 h-25 px-0  mb-3 mt-3 bg-secondary">
<div className="progress-bar  bg-light text-dark  text-start px-4" role="progressbar" aria-label="Example with label" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><b>MS Excel - 70% </b></div>
</div>
</div>
</div>
</div>
</div>
</>
)
}



export default Skills