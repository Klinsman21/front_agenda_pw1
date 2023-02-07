
let session ={
    login: true,
    user: false
}

if (typeof window !== 'undefined') {
    // Perform localStorage action
    session = localStorage.getItem("user");
  }


export function getSession() {
    return session    

}

export function setSession(user) {
    session.user = user
    session.login = true
    storage.set("session", session)
}

export function endSession() {
    session.user = false
    session.login = false
}
