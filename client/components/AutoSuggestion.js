"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSuggestions,
  setLoading,
  setSearchParams,
} from "@/redux/slices/flightSlice";

const AutoSuggestion = ({ query, locationType, loading }) => {
  const dispatch = useDispatch();
  const suggestions = useSelector(
    (state) => state.flight.suggestions[locationType]
  );

  // Fetch suggestions based on the input query
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query) {
        dispatch(setSuggestions({ locationType, suggestions: [] }));
        return;
      }

      try {
        dispatch(setLoading(true));
        const response = await fetch(
          `/api/flights/locations?query=${encodeURIComponent(query)}`
        );

        const data = await response.json();
        dispatch(setSuggestions({ locationType, suggestions: data || [] }));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchSuggestions();
  }, [query, locationType, dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() =>
                dispatch(setSearchParams({ [locationType]: suggestion.name }))
              }
              className="suggestion-item"
            >
              {suggestion.name} ({suggestion.code})
            </li>
          ))}
        </ul>
      )}
      {suggestions.length === 0 && query && !loading && (
        <p>No suggestions found</p>
      )}
    </div>
  );
};

export default AutoSuggestion;
