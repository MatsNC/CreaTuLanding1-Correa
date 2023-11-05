
export default function fetchData() {
    console.log("Processing request...");
    return new Promise(resolve => {
        const response = { status: "ok", timestamp: new Date() }
        setTimeout(() => {
            console.log("Sending response...");
            resolve(response)
        }, 1000)
    })
}
