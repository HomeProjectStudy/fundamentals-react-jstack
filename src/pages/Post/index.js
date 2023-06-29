import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom'

// export function Post () {
//   const params = useParams();
//   const { search } = useLocation();
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   console.log(queryParams.get(''))

//   console.log(params)

//   return (
//     <h1>Post Page</h1>
//   )
// }

// Pegar params no compomente de clase;

export class Post extends React.Component {
  constructor(props) {
    super(props)
    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }
  
  render() {
    return (
      <div>
        <h1>PostPage</h1>
      </div>
    )
  }
}