defmodule BroadcastLove.ContentsPagesTest do
  use BroadcastLove.ModelCase

  alias BroadcastLove.ContentsPages

  @valid_attrs %{}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = ContentsPages.changeset(%ContentsPages{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = ContentsPages.changeset(%ContentsPages{}, @invalid_attrs)
    refute changeset.valid?
  end
end
