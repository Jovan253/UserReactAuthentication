import { AuthData } from "../../auth/AuthWrapper"

export const Account = () => {
    const {user} = AuthData();

    return (
        <div className="page">
            <h2>Your Account</h2>
            <p>Account Name: {user.name}</p>
        </div>
    )
}