export default function NotFound () {
    return (
        <div className="h-[70vh] flex items-center justify-center text-center">
            <div>
                <h1 className="text-6xl font-bold">404</h1>
                <h4 className="text-xl font-bold my-3">Page Not Found</h4>
                <a href="/" className="btn btn-secondary">
                    Back to Home
                </a>
            </div>
        </div>
    );  
};