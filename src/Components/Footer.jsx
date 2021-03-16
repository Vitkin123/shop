export const Footer = () => {
    return (
        <footer className="page-footer teal darken-4">
            <div className="footer-copyright teal darken-4">
                <div className="container">
                    {new Date().getFullYear()}
                    <a className="grey-text text-lighten-4 right"
                       href="https://github.com/Vitkin123/shop"
                       rel="noreferrer"
                       target="_blank"

                    >Repo</a>
                </div>
            </div>
        </footer>
    )
}