import Link from 'next/link';

const Page = () => {
    return(
        <div>
            <h1>Dashboard Users</h1>
            <ul>
                <li><Link href="/dashboards/users/1">User 1</Link></li>
                <li><Link href="/dashboards/users/2">User 2</Link></li>
                <li><Link href="/dashboards/users/3">User 3</Link></li>
                <li><Link href="/dashboards/users/4">User 4</Link></li>
            </ul>
        </div>
    )
}
export default Page;