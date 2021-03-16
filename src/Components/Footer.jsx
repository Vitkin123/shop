export const Footer = () => {
    return (
        <footer className="page-footer footer">
            <div className="container top">
                {new Date().getFullYear()}
                <a className="grey-text text-lighten-4 right"
                   href="https://github.com/Vitkin123/shop"
                   rel="noreferrer"
                   target="_blank"
                >Repo</a>
            </div>

        </footer>
    )
}