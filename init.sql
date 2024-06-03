CREATE TABLE tictactoe_results (
    id SERIAL PRIMARY KEY,
    x_wins INTEGER DEFAULT 0,
    o_wins INTEGER DEFAULT 0,
    draws INTEGER DEFAULT 0
);

INSERT INTO tictactoe_results (id, x_wins, o_wins, draws)
VALUES (1, 0, 0, 0);