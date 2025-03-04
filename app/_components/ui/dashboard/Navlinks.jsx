import { Navlink, Detail, ClickLink, ToggleList, List } from "./Navlink";
import { links } from "@/app/_lib/neededArrays";

const Navlinks = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      {links.map(({ href, Icon, placeholder, isLink, projects }, i) => (
        <div className="relative w-full py-1 px-1" key={i}>
          <Navlink href={href} isLink={isLink}>
            <Detail>
              <ClickLink>
                <span>
                  <Icon className="w-6 h-6" />
                </span>
                <span>{placeholder}</span>
              </ClickLink>
              {projects ? <ToggleList /> : null}
            </Detail>
            {projects ? (
              <List>
                {projects.map(({ href, Icon, placeholder, domains }, i) => (
                  <div className="relative w-full py-1 ps-4" key={i}>
                    <Navlink href={href} isChildren={true}>
                      <Detail>
                        <ClickLink>
                          <span>
                            <Icon className="w-6 h-6" />
                          </span>
                          <span>{placeholder}</span>
                        </ClickLink>
                        {domains ? <ToggleList /> : null}
                      </Detail>
                      {domains ? (
                        <List>
                          {domains.map(
                            ({ href, Icon, placeholder, keywords }, i) => (
                              <div
                                className="relative w-full py-1 ps-4"
                                key={i}
                              >
                                <Navlink href={href} isChildren={true}>
                                  <Detail>
                                    <ClickLink>
                                      <span>
                                        <Icon className="w-6 h-6" />
                                      </span>
                                      <span>{placeholder}</span>
                                    </ClickLink>
                                    {keywords ? <ToggleList /> : null}
                                  </Detail>

                                  {keywords ? (
                                    <List>
                                      {keywords.map(
                                        ({ href, Icon, placeholder }, i) => (
                                          <div
                                            className="relative w-full my-1 ps-4"
                                            key={i}
                                          >
                                            <Navlink
                                              href={href}
                                              isChildren={true}
                                            >
                                              <Detail>
                                                <ClickLink>
                                                  <span>
                                                    <Icon className="w-6 h-6" />
                                                  </span>
                                                  <span>{placeholder}</span>
                                                </ClickLink>
                                              </Detail>
                                            </Navlink>
                                          </div>
                                        )
                                      )}
                                    </List>
                                  ) : null}
                                </Navlink>
                              </div>
                            )
                          )}
                        </List>
                      ) : null}
                    </Navlink>
                  </div>
                ))}
              </List>
            ) : null}
          </Navlink>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
