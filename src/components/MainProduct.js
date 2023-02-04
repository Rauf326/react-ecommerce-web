// import { React, useEffect, useState } from 'react'
// import styled from 'styled-components'

// const MainProduct = () => {
//     const [product, setproduct] = useState([])
//     useEffect(() => {
//         fetch(`${"https://api.pujakaitem.com/api/products"}`, {
//             method: 'GET',
//             headers: { 'Content-type': 'application/json' }
//         }).then(res => res.json()).then((response) => {
//             var temp = []
//             temp = response;
//             setproduct(temp)
//         }).catch((error) => {
//             console.log("error", error)
//         })

//     }, [])
//     return (
//         <>
//             <Wrapper>
                
//             </Wrapper>
//         </>
//     )
// }

// const Wrapper = styled.section`

// `
// export default MainProduct