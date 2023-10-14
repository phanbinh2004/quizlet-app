import Header from "../pages/Header";


const LayoutPage = ({children}) => {
    return (
      <>
        <Header/>
        <main
            className="container"
        >{children}</main>
        <footer></footer>
      </>
    );
}
 
export default LayoutPage;