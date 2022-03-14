export default function Home() {
    return (
        <><
            h1 className={"center-text"}>Hello!</h1>
            <p className={"center-text"}>
                Welcome To EDCC <span className={"emph"}>(Elite Dangerous CMDR Companion)</span>. EDCC is still in early
                alpha and some features may not work as intended and other stuff such as the name may change in the
                future. <br/>
                If you find any issues report them to us on github so we can fix them as soon as possible or contact us
                on
                discord.
            </p>

            <p className={"center-text"}>
                discord: Krabban/MrCR4B#6604 <br/>
                github issues: <a href={"https://github.com/JohannesThoren/edcc-issues/issues"}>https://github.com/JohannesThoren/edcc-issues/issues</a>
            </p>
        </>
    )
}