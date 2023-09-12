module.exports = {
    app: {
        token: 'MTEyNDc1MDc2Mzk1NzE3NDM4Mg.G1UZ-h.HMLk4LrG7Pj2xu9WacvZndW_o41zR7yUkamTWQ',
        playing: 'dsc.gg/thecreamteam',
        global: true,
        guild: '1101298239711490061',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
