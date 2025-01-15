import React from "react";
import { Box, Button, Input } from "@mui/material";
import Search from "@mui/icons-material/Search"
function SearchBox({ search, setSearch, handleSearch }) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
            marginTop="20px"
        >
            <Input
                type="text"
                name="search"
                placeholder="City"
                color="success"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}>
            </Input>

            <Button
                variant="contained"
                color="success"
                onClick={handleSearch}
                startIcon={<Search />}
            >
             Search
            </Button>

        </Box>
    )
}

export default SearchBox;