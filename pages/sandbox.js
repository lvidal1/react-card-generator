import React from 'react'

import Layout from '@components/Layout'
import Toolbar from '@components/Toolbar'

export default function Sandbox() {
    return (
        <Layout>
            <div className='flex flex-col flex-grow self-stretch'>
                <div className='flex-1'>
                    Editor
                </div>
                <Toolbar />
            </div>
        </Layout>
    )
}
