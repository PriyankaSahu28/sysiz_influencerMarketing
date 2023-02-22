import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
       <link href="https://demo.dashboardpack.com/architectui-html-free/main.css" rel="stylesheet" />
       <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
     <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}


