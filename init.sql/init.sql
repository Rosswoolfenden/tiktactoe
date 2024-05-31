CREATE TABLE tictactoe_results (
    id SERIAL PRIMARY KEY,
    x_wins INTEGER DEFAULT 0,
    o_wins INTEGER DEFAULT 0,
    draws INTEGER DEFAULT 0
);