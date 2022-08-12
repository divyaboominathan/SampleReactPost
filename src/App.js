import { useQuery } from '@tanstack/react-query';
import fetchPosts from './FetchApi';
import Form from './Form'
import './styles.css';


const App =()=> {
  const { data, error, isError, isLoading } = useQuery(['users'], fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>
}
if (isError) {
    return <div>Error! {error.message}</div>
}

return (
    <div className='App'>
        <h1 className='container'>Users Name</h1>
        {
            data.map((users) => {
                return <li className='container' key={users.id}>{users.name}</li>
            })
        }
<Form />
    </div>
    );
}
    
export default App;