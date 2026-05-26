
function UserProfile({ name, email, bio, website, isPremium, followerCount}) {

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', maxWidth: '400px' }}>

            <h2>
                {name}
                {/*operator koniunkcji*/}
                {isPremium && ( 
                    <span style={{ marginLeft: '10px', color: 'gold' }}>⭐ Premium</span>
                )}
            </h2>
            
            <p>Email: {email}</p>

            {/*operator koniunkcji*/}
            {bio && <p>Bio: {bio}</p>}

            {/*operator koniunkcji*/}
            {website && 
                <p>Website: <a href={website} target="_blank">{website}</a></p>
            }

            {/*ternary*/}
            <p>Followers: {followerCount > 999 ? '999+' : followerCount}</p> 
        </div>
    );
}

export default UserProfile 