const DDPResearchJourney = () => {
    return (
        <article className="space-y-10 text-lg leading-8 text-[var(--text-secondary)]">

            <p className="text-xl leading-9 text-[var(--text-primary)]">
                My Dual Degree Project started as another academic requirement. It
                eventually became one of the most challenging technical problems I'd
                ever worked on, forcing me to build a finite element solver completely
                from scratch.
            </p>

            <section>
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
                    The Problem
                </h2>

                <p className="mb-6">
                    Existing simulation tools were powerful but limited for my research
                    objective. I wanted complete control over the thermal model,
                    activation logic, and arbitrary toolpaths.
                </p>

                <p>
                    Instead of trying to force commercial software to do something it
                    wasn't designed for, I decided to build my own solution.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
                    Hundreds of Bugs Later
                </h2>

                <p className="mb-6">
                    Numerical simulations rarely fail gracefully. One misplaced index or
                    unstable boundary condition can completely break the solution.
                </p>

                <div className="border-l-4 border-[var(--accent)] pl-6 italic text-[var(--text-primary)]">
                    Research isn't about getting the right answer quickly. It's about
                    asking better questions every day.
                </div>

                <p className="mt-6">
                    Every failed simulation taught me something about heat transfer,
                    numerical stability, or simply how to debug complex systems.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
                    What I Learned
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                    <li>Complex problems become manageable when broken into stages.</li>
                    <li>Debugging is an underrated engineering skill.</li>
                    <li>Good research requires patience more than intelligence.</li>
                    <li>Simple solutions usually outperform clever ones.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
                    Looking Back
                </h2>

                <p>
                    Beyond the technical outcome, the project fundamentally changed how I
                    approach engineering problems. It taught me to think from first
                    principles rather than relying on existing tools.
                </p>

                <p className="mt-6 font-medium text-[var(--text-primary)]">
                    Sometimes the best way to solve a problem is to build the tool you
                    wish already existed.
                </p>
            </section>

        </article>
    );
};

export default DDPResearchJourney;