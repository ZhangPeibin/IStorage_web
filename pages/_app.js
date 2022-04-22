import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/Loading.css'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css';

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
