package ru.tinkoff.tinkoffmusicplatform.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.tinkoff.tinkoffmusicplatform.data.Playlist;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PlaylistsDTO {

    private List<Playlist> playlists;
}
