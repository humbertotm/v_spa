export default function renderFullPage(html, preloadedState) {
    return(
        `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                </head>

                <body>

                    <div class="container">
                        <div id="root"><h1>Hello world</h1></div>

                        <script>
                            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                        </script>

                        <script type="text/javascript" src="/dist/bundle.js"></script>
                    </div>

                </body>
            </html>`
    );
}