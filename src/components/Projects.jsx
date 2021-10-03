import React, { useState } from 'react'
import './Projects.css'
import AppPro from './AppPro'
import WebApp from './WebApp'
import MlApp from './MlApp'

function Projects() {

    const [appView, setAppView] = useState(false)
    const [webView, setWebView] = useState(false)
    const [mlView, setMlView] = useState(false)


    return (
        <div className="container">
            <div className="container mx-1 my-3">
                <button className="btn btn-primary mx-1" onClick={() => {
                    setAppView(!appView)
                    setWebView(false)
                    setMlView(false)
                }}>App Development Project</button>
                <button className="btn btn-primary mx-1" onClick={() => {
                    setAppView(false)
                    setWebView(!webView)
                    setMlView(false)
                }}>Web Development Project</button>
                <button className="btn btn-primary mx-1" onClick={() => {
                    setAppView(false)
                    setWebView(false)
                    setMlView(!mlView)
                }}>ML Project</button>
            </div>
            <div className="text-center my-5 py-2">
                <p className="m-2" style={{ fontFamily: "cursive", fontSize: "small" }}>Click on the title to see the source code</p>
                <div >
                    {appView ?
                        <AppPro />
                        : null
                    }
                </div>
                <div >
                    {webView ?
                        <WebApp />
                        : null
                    }
                </div>
                <div>
                    {mlView ?
                        <MlApp />
                        : null
                    }
                </div>
            </div>
        </div>

    )
}

export default Projects
