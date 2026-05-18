export function Form() {
    return (
        <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                    <form action="/" method="post">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" path="username" />
                                    <div id="usernameHelp" class="form-text">Your name
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" path="email" />
                                        <div id="emailHelp" class="form-text">Your email</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 mb-0">
                            <div class="d-grid">
                                <button type="submit" value="submit"
                                    class="btn btn-primary">Email me</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
