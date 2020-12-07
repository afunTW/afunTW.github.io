# How I manage the blog

Choose `hexo` as my blog framework. But customized.

## Generate and Deployment

As `hexo` provide the useful command line tools, it's easy to follow the instruction from their [website](https://hexo.io/docs/).

**For generate post / page / draft**

```bash
$ hexo new [layout] <title>
```

For deployment, although we can deploy posts by `hexo deploy` command, I choose `Travis CI` instead. Because of the following reason.

-   Required to store `_config.yml` on the GitHub just in case we lost the file.
-   CI provides configurable auto-checking in case our manual error.

**For `travis` deployment setting**

>   hexo deployment on GitHub Pages: https://hexo.io/docs/github-pages

-   GitHub grant the permission to Travis
-   GitHub generate token for deployment and setting as environment variable in Travis
-   Refer to [hexo.io/docs/github-pages](https://hexo.io/docs/github-pages) and set the `.travis.yml` 
    -   `master` branch store the configure file (trigger Travis)
    -   `gh-pages` as deployment destinations
    -   Note: remember to add the themes as submodules

## Categories Management

> Categories should be organized by purpose and it's unique

- **Diary**, life notes
- **Writeup**, writing by reading, not transform to my own language yet
- **Series_XXX**, transfer form information to knowledge

## Tags Management

> Tags can group by some different groups (multi-select)

- **Fileds**, e.g. economic, computer vision, ...
- **Products**, e.g. ubuntu, bigquery, ...
- **Properties**, e.g. management, architecture, experience, reading, ...

## Reference

-   **[hexo.io](https://hexo.io/docs/)**
-   [hexo-theme-next](https://github.com/theme-next/hexo-theme-next.git)

