function Footer() {
    return <footer className="page-footer
    black accent-1">
        <div className="footer-copyrigth">
            <div className="container">
                © {new Date().getFullYear()}
                , права защищены компанией SpaceNet
                <a className="grey-text
                text-lighten-4 right"
                href="#!">Правообладателям</a>
            </div>
        </div>
    </footer>
}
export { Footer };
