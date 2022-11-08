import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline.js";
import { StyledFavorites } from "../src/components/Favorites";

function HomePage() {
    const styleHomePage = { 
        // backgroundColor: "red" 
    };
    // console.log(config.playlists)

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favorites favorites={config.favorites}/>
            </div>
        </>        
    );
}

export default HomePage

const StyledHeader = styled.div`
        .perfil {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        .user-info {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
        }

        .banner {
            height: 325px;
            width: 100%;
        }
  `;

function Header() {
    return (
        <StyledHeader>
            <img src={config.banner} className="banner"/>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} className="perfil"/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline(props) {
    // console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);
    //Statement
    //Retorno por Expressao
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                // console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}

function Favorites(props){
    const favoritesList = Object.keys(props.favorites);
    console.log("Dentro do componente", props.favorites);
    return (
        <StyledFavorites>
            {favoritesList.map((favorite) => {
                const channels = props.favorites[favorite]
                return (
                    <section>
                        <h2>{favorite}</h2>
                        <div>
                            {channels.map((channel) => {
                                return (
                                    <a href={channel.url}>
                                        <img src={channel.img} />
                                        <span>
                                            {channel.user}
                                        </span>
                                    </a>
                                )
                            })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    );
}